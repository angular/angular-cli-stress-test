/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp613Component } from './comp-613.component';

describe('Comp613Component', () => {
  let component: Comp613Component;
  let fixture: ComponentFixture<Comp613Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp613Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp613Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
