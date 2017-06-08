/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp424Component } from './comp-424.component';

describe('Comp424Component', () => {
  let component: Comp424Component;
  let fixture: ComponentFixture<Comp424Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp424Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp424Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
