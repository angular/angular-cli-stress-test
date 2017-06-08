/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2001Component } from './comp-2001.component';

describe('Comp2001Component', () => {
  let component: Comp2001Component;
  let fixture: ComponentFixture<Comp2001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
