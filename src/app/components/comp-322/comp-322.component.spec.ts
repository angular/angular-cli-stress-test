/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp322Component } from './comp-322.component';

describe('Comp322Component', () => {
  let component: Comp322Component;
  let fixture: ComponentFixture<Comp322Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp322Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
