/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp77Component } from './comp-77.component';

describe('Comp77Component', () => {
  let component: Comp77Component;
  let fixture: ComponentFixture<Comp77Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp77Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp77Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
