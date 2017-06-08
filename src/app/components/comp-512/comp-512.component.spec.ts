/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp512Component } from './comp-512.component';

describe('Comp512Component', () => {
  let component: Comp512Component;
  let fixture: ComponentFixture<Comp512Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp512Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp512Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
