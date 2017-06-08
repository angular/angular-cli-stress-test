/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3809Component } from './comp-3809.component';

describe('Comp3809Component', () => {
  let component: Comp3809Component;
  let fixture: ComponentFixture<Comp3809Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3809Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3809Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
