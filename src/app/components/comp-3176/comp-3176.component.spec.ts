/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3176Component } from './comp-3176.component';

describe('Comp3176Component', () => {
  let component: Comp3176Component;
  let fixture: ComponentFixture<Comp3176Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3176Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
