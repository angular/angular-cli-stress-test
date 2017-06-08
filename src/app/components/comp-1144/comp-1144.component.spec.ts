/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1144Component } from './comp-1144.component';

describe('Comp1144Component', () => {
  let component: Comp1144Component;
  let fixture: ComponentFixture<Comp1144Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1144Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
