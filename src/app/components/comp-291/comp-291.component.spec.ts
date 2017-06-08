/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp291Component } from './comp-291.component';

describe('Comp291Component', () => {
  let component: Comp291Component;
  let fixture: ComponentFixture<Comp291Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp291Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp291Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
