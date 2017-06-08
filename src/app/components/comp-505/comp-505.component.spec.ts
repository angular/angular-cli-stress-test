/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp505Component } from './comp-505.component';

describe('Comp505Component', () => {
  let component: Comp505Component;
  let fixture: ComponentFixture<Comp505Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp505Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp505Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
