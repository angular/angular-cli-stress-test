/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service985Service } from './service-985.service';

describe('Service985Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service985Service]
    });
  });

  it('should ...', inject([Service985Service], (service: Service985Service) => {
    expect(service).toBeTruthy();
  }));
});
