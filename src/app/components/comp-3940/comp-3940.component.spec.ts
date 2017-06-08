/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3940Component } from './comp-3940.component';

describe('Comp3940Component', () => {
  let component: Comp3940Component;
  let fixture: ComponentFixture<Comp3940Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3940Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3940Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
