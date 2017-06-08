/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1428Component } from './comp-1428.component';

describe('Comp1428Component', () => {
  let component: Comp1428Component;
  let fixture: ComponentFixture<Comp1428Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1428Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1428Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
