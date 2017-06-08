/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3108Component } from './comp-3108.component';

describe('Comp3108Component', () => {
  let component: Comp3108Component;
  let fixture: ComponentFixture<Comp3108Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3108Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
