/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp681Component } from './comp-681.component';

describe('Comp681Component', () => {
  let component: Comp681Component;
  let fixture: ComponentFixture<Comp681Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp681Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp681Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
