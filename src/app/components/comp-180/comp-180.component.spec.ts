/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp180Component } from './comp-180.component';

describe('Comp180Component', () => {
  let component: Comp180Component;
  let fixture: ComponentFixture<Comp180Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp180Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
