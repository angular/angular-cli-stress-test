/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp952Component } from './comp-952.component';

describe('Comp952Component', () => {
  let component: Comp952Component;
  let fixture: ComponentFixture<Comp952Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp952Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp952Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
