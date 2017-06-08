/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1785Component } from './comp-1785.component';

describe('Comp1785Component', () => {
  let component: Comp1785Component;
  let fixture: ComponentFixture<Comp1785Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1785Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1785Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
