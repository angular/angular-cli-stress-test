/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1924Component } from './comp-1924.component';

describe('Comp1924Component', () => {
  let component: Comp1924Component;
  let fixture: ComponentFixture<Comp1924Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1924Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1924Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
