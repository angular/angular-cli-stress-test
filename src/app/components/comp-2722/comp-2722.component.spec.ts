/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2722Component } from './comp-2722.component';

describe('Comp2722Component', () => {
  let component: Comp2722Component;
  let fixture: ComponentFixture<Comp2722Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2722Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2722Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
