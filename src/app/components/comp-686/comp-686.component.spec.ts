/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp686Component } from './comp-686.component';

describe('Comp686Component', () => {
  let component: Comp686Component;
  let fixture: ComponentFixture<Comp686Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp686Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp686Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
