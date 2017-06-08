/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp466Component } from './comp-466.component';

describe('Comp466Component', () => {
  let component: Comp466Component;
  let fixture: ComponentFixture<Comp466Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp466Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp466Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
