/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp33Component } from './comp-33.component';

describe('Comp33Component', () => {
  let component: Comp33Component;
  let fixture: ComponentFixture<Comp33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp33Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
