/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3977Component } from './comp-3977.component';

describe('Comp3977Component', () => {
  let component: Comp3977Component;
  let fixture: ComponentFixture<Comp3977Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3977Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3977Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
