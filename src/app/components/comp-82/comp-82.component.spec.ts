/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp82Component } from './comp-82.component';

describe('Comp82Component', () => {
  let component: Comp82Component;
  let fixture: ComponentFixture<Comp82Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp82Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp82Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
