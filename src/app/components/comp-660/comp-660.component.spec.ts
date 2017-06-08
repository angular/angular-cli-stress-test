/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp660Component } from './comp-660.component';

describe('Comp660Component', () => {
  let component: Comp660Component;
  let fixture: ComponentFixture<Comp660Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp660Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp660Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
