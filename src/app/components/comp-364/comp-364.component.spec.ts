/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp364Component } from './comp-364.component';

describe('Comp364Component', () => {
  let component: Comp364Component;
  let fixture: ComponentFixture<Comp364Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp364Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
