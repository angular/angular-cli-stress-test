/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1620Component } from './comp-1620.component';

describe('Comp1620Component', () => {
  let component: Comp1620Component;
  let fixture: ComponentFixture<Comp1620Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1620Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1620Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
