/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1312Component } from './comp-1312.component';

describe('Comp1312Component', () => {
  let component: Comp1312Component;
  let fixture: ComponentFixture<Comp1312Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1312Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
