/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp824Component } from './comp-824.component';

describe('Comp824Component', () => {
  let component: Comp824Component;
  let fixture: ComponentFixture<Comp824Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp824Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp824Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
