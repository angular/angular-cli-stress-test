/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1512Component } from './comp-1512.component';

describe('Comp1512Component', () => {
  let component: Comp1512Component;
  let fixture: ComponentFixture<Comp1512Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1512Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1512Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
