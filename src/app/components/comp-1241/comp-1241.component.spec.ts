/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1241Component } from './comp-1241.component';

describe('Comp1241Component', () => {
  let component: Comp1241Component;
  let fixture: ComponentFixture<Comp1241Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1241Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
