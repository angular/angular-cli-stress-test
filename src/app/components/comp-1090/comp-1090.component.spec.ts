/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1090Component } from './comp-1090.component';

describe('Comp1090Component', () => {
  let component: Comp1090Component;
  let fixture: ComponentFixture<Comp1090Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1090Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1090Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
