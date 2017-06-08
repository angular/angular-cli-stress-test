/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3158Component } from './comp-3158.component';

describe('Comp3158Component', () => {
  let component: Comp3158Component;
  let fixture: ComponentFixture<Comp3158Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3158Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
