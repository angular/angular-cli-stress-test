/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4202Component } from './comp-4202.component';

describe('Comp4202Component', () => {
  let component: Comp4202Component;
  let fixture: ComponentFixture<Comp4202Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4202Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
