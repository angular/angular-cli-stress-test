/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3680Component } from './comp-3680.component';

describe('Comp3680Component', () => {
  let component: Comp3680Component;
  let fixture: ComponentFixture<Comp3680Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3680Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3680Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
