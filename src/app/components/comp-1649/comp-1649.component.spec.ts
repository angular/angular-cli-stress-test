/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1649Component } from './comp-1649.component';

describe('Comp1649Component', () => {
  let component: Comp1649Component;
  let fixture: ComponentFixture<Comp1649Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1649Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1649Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
