/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp548Component } from './comp-548.component';

describe('Comp548Component', () => {
  let component: Comp548Component;
  let fixture: ComponentFixture<Comp548Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp548Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp548Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
