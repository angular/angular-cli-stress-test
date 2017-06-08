/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp506Component } from './comp-506.component';

describe('Comp506Component', () => {
  let component: Comp506Component;
  let fixture: ComponentFixture<Comp506Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp506Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp506Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
