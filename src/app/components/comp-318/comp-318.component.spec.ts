/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp318Component } from './comp-318.component';

describe('Comp318Component', () => {
  let component: Comp318Component;
  let fixture: ComponentFixture<Comp318Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp318Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp318Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
