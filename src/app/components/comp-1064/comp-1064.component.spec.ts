/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1064Component } from './comp-1064.component';

describe('Comp1064Component', () => {
  let component: Comp1064Component;
  let fixture: ComponentFixture<Comp1064Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1064Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1064Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
