/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp469Component } from './comp-469.component';

describe('Comp469Component', () => {
  let component: Comp469Component;
  let fixture: ComponentFixture<Comp469Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp469Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp469Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
