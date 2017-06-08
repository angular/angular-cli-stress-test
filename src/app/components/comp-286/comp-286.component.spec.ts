/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp286Component } from './comp-286.component';

describe('Comp286Component', () => {
  let component: Comp286Component;
  let fixture: ComponentFixture<Comp286Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp286Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp286Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
