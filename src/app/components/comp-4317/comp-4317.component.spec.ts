/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4317Component } from './comp-4317.component';

describe('Comp4317Component', () => {
  let component: Comp4317Component;
  let fixture: ComponentFixture<Comp4317Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4317Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4317Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
