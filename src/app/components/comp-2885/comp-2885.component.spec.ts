/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2885Component } from './comp-2885.component';

describe('Comp2885Component', () => {
  let component: Comp2885Component;
  let fixture: ComponentFixture<Comp2885Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2885Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2885Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
