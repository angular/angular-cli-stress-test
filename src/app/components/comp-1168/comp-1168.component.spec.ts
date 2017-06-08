/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1168Component } from './comp-1168.component';

describe('Comp1168Component', () => {
  let component: Comp1168Component;
  let fixture: ComponentFixture<Comp1168Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1168Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
