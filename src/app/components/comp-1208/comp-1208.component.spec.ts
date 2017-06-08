/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1208Component } from './comp-1208.component';

describe('Comp1208Component', () => {
  let component: Comp1208Component;
  let fixture: ComponentFixture<Comp1208Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1208Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
