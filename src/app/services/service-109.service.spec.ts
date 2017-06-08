/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service109Service } from './service-109.service';

describe('Service109Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service109Service]
    });
  });

  it('should ...', inject([Service109Service], (service: Service109Service) => {
    expect(service).toBeTruthy();
  }));
});
