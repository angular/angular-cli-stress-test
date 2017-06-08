/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4869Component } from './comp-4869.component';

describe('Comp4869Component', () => {
  let component: Comp4869Component;
  let fixture: ComponentFixture<Comp4869Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4869Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4869Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
