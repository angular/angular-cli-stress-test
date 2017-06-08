/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service559Service } from './service-559.service';

describe('Service559Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service559Service]
    });
  });

  it('should ...', inject([Service559Service], (service: Service559Service) => {
    expect(service).toBeTruthy();
  }));
});
