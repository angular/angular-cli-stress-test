/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp86Component } from './comp-86.component';

describe('Comp86Component', () => {
  let component: Comp86Component;
  let fixture: ComponentFixture<Comp86Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp86Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp86Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
