/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1528Component } from './comp-1528.component';

describe('Comp1528Component', () => {
  let component: Comp1528Component;
  let fixture: ComponentFixture<Comp1528Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1528Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1528Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
