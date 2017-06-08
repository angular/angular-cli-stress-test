/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp861Component } from './comp-861.component';

describe('Comp861Component', () => {
  let component: Comp861Component;
  let fixture: ComponentFixture<Comp861Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp861Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp861Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
